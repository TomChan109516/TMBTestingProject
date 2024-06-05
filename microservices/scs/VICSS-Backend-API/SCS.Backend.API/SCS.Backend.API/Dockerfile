#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app
#COPY ["SCS.Backend.API/SCS.Backend.API.csproj", "SCS.Backend.API/"]
COPY *.csproj ./
#RUN dotnet restore "SCS.Backend.API/SCS.Backend.API.csproj"
RUN dotnet restore

COPY . .
#WORKDIR "/src/SCS.Backend.API"
#RUN dotnet build "SCS.Backend.API.csproj" -c Release -o /app/build
RUN dotnet publish -c Release -o out

#FROM build AS publish
#RUN dotnet publish "SCS.Backend.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Build the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app
COPY --from=build /app/out ./

#FROM base AS final
#WORKDIR /app
#COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SCS.Backend.API.dll"]