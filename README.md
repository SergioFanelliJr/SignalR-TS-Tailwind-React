# C#

```csharp
WebApplicationBuilder Builder = WebApplication.CreateBuilder();


// Configura CORS
Builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", builder =>
    {
        builder
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials()
            .WithOrigins("http://localhost:3000");
    });
});

// Conexão SignalR com o cliente
Builder.Services.AddSignalR();

WebApplication App = Builder.Build();

// Adiciona o CORS
App.UseCors("CorsPolicy");

// Registra os endpoints do SignalR
App.MapHub<Signal>("/hub");


// Inicia a aplicação
App.Run();
```

---

```csharp
public class Signal : Hub
{
    public override async Task OnConnectedAsync()
    {
        await Clients.Caller.SendAsync("(Server)[ONLINE] Conexão estabelecida com sucesso!");
        await base.OnConnectedAsync();
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        await Clients.Caller.SendAsync("(Server)[OFFLINE] Conexão interrompida.");
        await base.OnDisconnectedAsync(exception);
    }

}
```

No launcSettings.json, adicione o seguinte código:

```json
"applicationUrl": "https://localhost:5000;http://localhost:5001",
```
