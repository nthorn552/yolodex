export type Tab = {
  route: string;
  label: string;
};

const tabList: Tab[] = [
  {
    route: "/dashboard",
    label: "Dashboard"
  },
  {
    route: "/shmac",
    label: "SHMAC"
  },
  {
    route: "/billing",
    label: "Billing"
  }
];

export default tabList;
