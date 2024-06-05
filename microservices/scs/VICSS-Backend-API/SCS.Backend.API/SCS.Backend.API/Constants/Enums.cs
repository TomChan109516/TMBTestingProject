namespace SCS_Backend_API.Constants
{
    public enum PaymentStatus
    {
        Completed = 1,
        Pending = 2,
        Deleted = 3
    }

    public enum TransactionType
    {
        Insert = 1,
        Reschedule = 2,
        Delete = 3,
        Amend = 4,
        Cancel = 5
    }
    public enum AppointmentStatus
    {
        Booked = 1,
        Cancelled = 2,
        Draft = 3
    }

    public enum WatchlistStatus
    {
        Cancelled = 1,
        Outstanding = 2
    }

    public enum UserAccountModificationStatus
    {
        I,
        D,
        U,
        Insert,
        Update,
        Delete
    }

    public enum TransactionTypeCode
    {
        I,
        U,
        D
    }

    public enum UserAccountStatusCode
    {
        A,
        X,
        I
    }

    //public enum BookingStatus
    //{
    //    Booked,
    //    Draft,
    //    Cancelled
    //}

    public enum WeekSessionCode
    {
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
        Sunday = 7

    }
   
}
