import { Goal } from './goal';

export const GOALS: Goal[] = [
    {id: 1, state: "progress", name: "Carro novo", description: "Investir num carro melhor!", currentValue: 0, finalValue: 10000, deadline:new Date(2021, 6, 2), image:"https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id: 2, state: "progress", name: "Remodelações", description: "Comprar nova mobília.", currentValue: 1000, finalValue: 2000, deadline:new Date(2021, 6, 22), image:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id: 3, state: "progress", name: "Férias", description: "Férias na Grécia.", currentValue: 2000, finalValue: 5000, deadline:new Date(2021, 7, 1), image:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"},
    {id: 3, state: "done", name: "Férias", description: "Férias na Grécia.", currentValue: 2000, finalValue: 5000, deadline:new Date(2021, 7, 1), image:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"},
];