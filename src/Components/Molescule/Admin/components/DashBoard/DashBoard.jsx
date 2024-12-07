import React, { useState, useEffect } from "react";
import MyAxios from "../../../../../setup/configAxios";
import { Button, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState("day");
  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [weekRange, setWeekRange] = useState(getWeekRange());
  const [weekOptions, setWeekOptions] = useState(getWeeksInMonth(selectedMonth, year));

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };

  function getWeekRange() {
    const currentDate = new Date();
    const firstDay = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1))
      .toISOString()
      .split("T")[0];
    const lastDay = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 7))
      .toISOString()
      .split("T")[0];
    return { firstDay, lastDay };
  }

  function getWeeksInMonth(month, year) {
    const weeks = [];
    let firstDate = new Date(year, month, 1);
    let lastDate = new Date(year, month + 1, 0);
    let currentWeekStart = new Date(firstDate);

    while (currentWeekStart < lastDate) {
      let currentWeekEnd = new Date(currentWeekStart);
      currentWeekEnd.setDate(currentWeekEnd.getDate() + 6);
      if (currentWeekEnd > lastDate) {
        currentWeekEnd = lastDate;
      }
      weeks.push({
        firstDay: currentWeekStart.toISOString().split("T")[0],
        lastDay: currentWeekEnd.toISOString().split("T")[0],
      });
      currentWeekStart.setDate(currentWeekStart.getDate() + 7);
    }
    return weeks;
  }

  const getStartEndTime = (range) => {
    let startTime, endTime;

    switch (range) {
      case "day":
        startTime = weekRange.firstDay;
        endTime = weekRange.lastDay;
        break;
      case "month":
        startTime = "";
        endTime = "";
        break;
      default:
        startTime = endTime = "";
    }

    return { startTime, endTime };
  };

  useEffect(() => {
    const fetchData = async () => {
      const { startTime, endTime } = getStartEndTime(timeRange);
      let response;
      try {
        if (timeRange === "day") {
          response = await MyAxios.get(`api/v1/dashboard/daily?startTime=${startTime}&endTime=${endTime}&year=${year}`);
          setData(
            response.data.map((item) => ({
              date: new Date(item.date).toLocaleDateString("en-US"),
              revenue: item.total,
            }))
          );
        } else if (timeRange === "month") {
          response = await MyAxios.get(`api/v1/dashboard/month?year=${year}`);
          setData(
            response.data.map((item) => ({
              date: item.month,
              revenue: item.total,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [timeRange, year, weekRange]);

  useEffect(() => {
    setWeekOptions(getWeeksInMonth(selectedMonth, year));
    setWeekRange(getWeeksInMonth(selectedMonth, year)[0]);
  }, [selectedMonth, year]);

  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Doanh thu của PetHome</h1>

        <div className="flex justify-end mb-4 space-x-2 items-center">
          {timeRange === "day" && (
            <>
              <FormControl variant="outlined" size="small" className="min-w-[150px]">
                <InputLabel>Tháng</InputLabel>
                <Select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} label="Tháng">
                  {months.map((month, index) => (
                    <MenuItem key={index} value={index}>
                      {month}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" size="small" className="min-w-[200px]">
                <InputLabel>Tuần</InputLabel>
                <Select
                  value={weekOptions.findIndex(
                    (week) => week.firstDay === weekRange.firstDay && week.lastDay === weekRange.lastDay
                  )}
                  onChange={(e) => setWeekRange(weekOptions[e.target.value])}
                  label="Tuần"
                >
                  {weekOptions.map((week, index) => (
                    <MenuItem key={index} value={index}>
                      {`${week.firstDay} - ${week.lastDay}`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
          <Button
            variant={timeRange === "day" ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleTimeRangeChange("day")}
          >
            Theo tuần
          </Button>

          <Button
            variant={timeRange === "month" ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleTimeRangeChange("month")}
          >
            Theo năm
          </Button>
        </div>

        <Card>
          <CardContent>
            <Typography variant="h6" component="div">
              Thống kê doanh thu
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
