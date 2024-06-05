#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["ConfigurationService/ConfigurationService.csproj", "ConfigurationService/"]
COPY ["DataAccess/DataAccess.csproj", "DataAccess/"]
COPY ["SharedModels/Models.csproj", "SharedModels/"]
RUN dotnet restore "./ConfigurationService/./ConfigurationService.csproj"
COPY . .
WORKDIR "/src/ConfigurationService"
RUN dotnet build "./ConfigurationService.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./ConfigurationService.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ConfigurationService.dll"]