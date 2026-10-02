import ResortCard from "./ResortCard";
import type { ResortListing } from "../data/data";

interface ResortContainerProps {
    listings: ResortListing[];
}
export default function ResortContainer({ listings }: ResortContainerProps) {
    return ( 
        <div className="ResortContainer">
            {listings.map((list) => (
                <ResortCard key={list.id} {...list} />
            ))}
        </div>
    );
}