interface TimeLine {
  title:
    | "Bidding Starts"
    | "Bidding Ends"
    | "Allotment Finalization"
    | "Refund Initiation"
    | "Demat Transfer"
    | "Listing Date";
  value: number;
  date: string;
  filled?: boolean;
}

interface Company {
  name: string;
  description: string;
  symbol: string;
  logo?: string;
  issue: {
    size: {
      from: number;
      to: number;
    };
    date: {
      from: string;
      to: string;
    };
  };
  price: {
    from: number;
    to: number;
  };
  status: number;
  minAmount: number;
  lotSize: number;
  listedOn: string;
  listedPrice: number;
  listingGains: number;
  urlKey: string;
}
