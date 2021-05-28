import { HistItem } from './receipt'

export const MOCK_HISTORY: HistItem[] = [

    {label: "User0001 added expense", info: "-75.00€", date: new Date(),
        time: {hours: 12, minutes: 12}, document: undefined},
    {label: "User0002 added expense", info: "-20.00€", date: new Date(),
        time: {hours: 12, minutes: 12}, document: undefined},
    {label: "User0000 checked expense", info: "id xx10", date: new Date(),
        time: {hours: 12, minutes: 12}, document: undefined},
    {label: "User0000 hidden receipt", info: "id xx10", date: new Date(),
        time: {hours: 12, minutes: 12}, document: undefined},
    {label: "User0002 added income", info: "+600.00€ (monthly)", date: new Date(),
        time: {hours: 12, minutes: 12}, document: undefined},

]