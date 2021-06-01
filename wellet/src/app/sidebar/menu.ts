import { MenuItem } from "./menu_item";

export const MENU: MenuItem[] = [
    {id: 1, name: "Dashboard", route: "dashboard", icon: "home"},
    {id: 2, name: "Users", route: "users", icon: "supervisor_account"},
    {id: 3, name: "History", route: "history", icon: "history"},
    {id: 4, name: "Expenses", route: "add-new-transaction", icon: "account_balance_wallet"},
    {id: 5, name: "Repository", route: "repository", icon: "folder"},
    {id: 6, name: "Goals", route: "goals", icon: "check_box"},
    {id: 7, name: "Reports", route: "analytics", icon: "show_chart"}
]