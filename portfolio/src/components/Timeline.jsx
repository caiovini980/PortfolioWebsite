import React from "react";
import TimelineData from "../data/TimelineData";
import TimelineItem from "./TimelineItem";

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                {TimelineData.map(item => (
                    <TimelineItem
                        year={ item.Year }
                        title={ item.Title }
                        duration={ item.Duration }
                        company={ item.Company }
                        description={ item.Description }
                    />
                ))} 
            </div>
        </div>
    )
}

export default Timeline;