import { Goal } from './goal';

export const GOALS: Goal[] = [
    {id: 1, state: "progress", name: "Carro novo", description: "Investir num carro melhor!", currentValue: 0, finalValue: 10000, deadline:new Date(2021, 6, 2), image:"https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id: 2, state: "progress", name: "Remodelações", description: "Comprar nova mobília.", currentValue: 1000, finalValue: 2000, deadline:new Date(2021, 6, 22), image:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id: 3, state: "progress", name: "Férias", description: "Férias na Grécia.", currentValue: 2000, finalValue: 5000, deadline:new Date(2021, 7, 1), image:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"},
    {id: 4, state: "done", name: "Jantar romântico", description: "Aniversário de namoro.", currentValue: 100, finalValue: 100, deadline:new Date(2021, 3, 5), image:"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id: 5, state: "done", name: "Festival", description: "Festival, concerto, amigos!", currentValue: 300, finalValue: 300, deadline:new Date(2021, 4, 15), image:"https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id: 6, state: "empty", name: "Festival", description: "", currentValue: 0, finalValue: 0, deadline:new Date(), image:""},
];