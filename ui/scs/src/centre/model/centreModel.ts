
export interface SearchLaneResponseModel {
    laneId: string;
    centreId: string;
    laneName: string;
    laneType: string;
    virtualLaneId: string | null;
    physicalLaneName: string | null;
    laneDescription: string;
    laneStatus: boolean;
    userId: string | null;
    laneTimeSlots: any[];
}