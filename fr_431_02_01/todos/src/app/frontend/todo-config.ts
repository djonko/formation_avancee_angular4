export class TodoConfig{
    
    private static url = "http://localhost:2403/todos";

    private static urlAdmin = "http://localhost:2403/users";

    public static getUrl():string{
        return TodoConfig.url;
    }
    
    public static getUrlAdmin():string{
        return TodoConfig.urlAdmin;
    }
}