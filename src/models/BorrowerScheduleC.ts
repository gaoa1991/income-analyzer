export interface BorrowerScheduleC {
  id: number;
  borrowerName: string;
  businessName: string;

  currentYear: BorrowerScheduleCItem;
  previousYear: BorrowerScheduleCItem;
  delta: BorrowerScheduleCItem;

  monthlyAmountUsedInDti: number;

  comments: string;
}

export interface BorrowerScheduleCItem {
  id: number;
  year: number;
  netProfitLoss: number;
  otherIncomeLoss: number;
  Depletion: number;
  mealsEntertainment: number;
  amortization: number;
  businessUseOfHome: number;
  adjustment: number;
  total: number;
}

export const createNewRecord = (id: number, year: number) => {
  let newRecord: BorrowerScheduleC = {
    id,
    borrowerName: "",
    businessName: "",
    currentYear: {
      id: 1,
      year,
      netProfitLoss: 0,
      otherIncomeLoss: 0,
      Depletion: 0,
      mealsEntertainment: 0,
      amortization: 0,
      businessUseOfHome: 0,
      adjustment: 0,
      total: 0
    },
    previousYear: {
      id: 1,
      year: year - 1,
      netProfitLoss: 0,
      otherIncomeLoss: 0,
      Depletion: 0,
      mealsEntertainment: 0,
      amortization: 0,
      businessUseOfHome: 0,
      adjustment: 0,
      total: 0
    },
    delta: {
      id: 1,
      year,
      netProfitLoss: 0,
      otherIncomeLoss: 0,
      Depletion: 0,
      mealsEntertainment: 0,
      amortization: 0,
      businessUseOfHome: 0,
      adjustment: 0,
      total: 0
    },
    monthlyAmountUsedInDti: 0,
    comments: ""
  };
  return newRecord;
};
