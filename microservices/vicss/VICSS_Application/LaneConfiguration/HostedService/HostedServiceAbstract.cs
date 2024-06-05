namespace VICSS.Service.LaneConfiguration.HostedService
{
    public abstract class HostedServiceAbstract : IHostedService, IDisposable
    {
        private Task executingTask;
        private readonly CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
        protected abstract Task ExecuteAsync(CancellationToken stoppingToken);

        /// <summary>
        /// Start hosted service.
        /// </summary>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public virtual Task StartAsync(CancellationToken cancellationToken)
        {
            executingTask = ExecuteAsync(cancellationTokenSource.Token);

            if (executingTask.IsCompleted)
            {
                return executingTask;
            }

            return Task.CompletedTask;
        }

        /// <summary>
        /// Stop Hosted Service.
        /// </summary>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public virtual async Task StopAsync(CancellationToken cancellationToken)
        {
            if (executingTask == null)
            {
                return;
            }

            try
            {
                cancellationTokenSource.Cancel();
            }
            finally
            {
                await Task.WhenAny(executingTask, Task.Delay(Timeout.Infinite, cancellationToken));
            }

        }

        /// <summary>
        /// Dispose method.
        /// </summary>
        public virtual void Dispose()
        {
            cancellationTokenSource.Cancel();
        }

    }
}
