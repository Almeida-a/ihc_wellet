import { User, UserStatus } from "src/utils/User";

export let users: User[] = [
    new User("Emma Williams", "emmaw@ua.pt", "Hey, it's me, EMMA!", "https://images.unsplash.com/photo-1548142813-c348350df52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80", UserStatus.ACTIVE),
    new User("Alex Will", "alexwill00@live.com.pt", "I'm once again asking for your financial support", "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", UserStatus.ACTIVE),
    new User("John Smith", "test@ua.pt", "Excited to be here!", "https://images.unsplash.com/photo-1514415959856-84514e035ce5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", UserStatus.INACTIVE)
]

export let currentStoredUser: User;