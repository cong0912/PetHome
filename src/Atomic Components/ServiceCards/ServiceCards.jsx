import ContentCutIcon from '@mui/icons-material/ContentCut';
import "./ServiceCard.css"
function ServiceCard() {
    return (
        <div className="service-card-container">
            <div className="service-card-detail">
                <div className="service-card-icon">
                    <ContentCutIcon className="card-icon" />
                </div>
                <p className="service-card-title">
                    Grooming
                </p>
                <p className="service-card-information">
                    Chúng tối biết cách làm thế nào để thú cưng của bạn trở nên đẳng cấp và cá tính hơn. Với dịch vụ cắt tỉa lông thú cưng chúng tôi sẽ giúp các bé trở thành phiên bản hoàn hảo nhất...
                </p>
                <div className="service-card-button">
                    <p className="button-detail">xem them</p>
                </div>
            </div>
        </div>
    )
}
export default ServiceCard