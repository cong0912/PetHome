import React from "react";
import Text from "../../Atom/Text/Text";
import "./PetCards.scss";

function PetCard({
    name,
    img,
    species,
    sex,
    className,
    onClick,
    breed,
    age,
    weight,
    status
}) {
    return (
        <div
            className={`pet-card-container ${className} cursor-pointer`}
            onClick={onClick}
        >
            <div className="pet-card-detail">
                <div className="pet-img">
                    <img src={img} alt={name} />
                </div>
                <div className="flex-grow">
                    <div className="pet-card-name mr-44 mb-4">
                        <Text
                            content={"Name: "}
                            className={"font-bold text-lg"}
                        />
                        <Text
                            className="pet-card-name-text text-xl font-bold ml-2"
                            content={name}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                        <div className="flex-row ">
                            <Text
                                content={"Service status: "}
                                className={"font-bold text-lg"}
                            />
                            <Text
                                className="pet-card-species"
                                content={status}
                            />
                        </div>
                        <div className="flex-row">
                            <Text
                                content={"Species: "}
                                className={"font-bold text-lg"}
                            />
                            <Text
                                className="pet-card-species"
                                content={species}
                            />
                        </div>
                        <div className="flex-row">
                            <Text
                                content={"Sex: "}
                                className={"font-bold text-lg"}
                            />
                            <Text
                                className="pet-card-sex"
                                content={sex}
                            />
                        </div>
                        <div className="flex-row">
                            <Text
                                content={"Breed: "}
                                className={"font-bold text-lg"}
                            />
                            <Text
                                className="pet-card-breed"
                                content={breed}
                            />
                        </div>
                        <div className="flex-row">
                            <Text
                                content={"Age: "}
                                className={"font-bold text-lg"}
                            />
                            <Text
                                className="pet-card-age"
                                content={age}
                            />
                        </div>
                        <div className="flex-row">
                            <Text
                                content={"Weight: "}
                                className={"font-bold text-lg"}
                            />
                            <Text
                                className="pet-card-weight"
                                content={weight}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PetCard;
