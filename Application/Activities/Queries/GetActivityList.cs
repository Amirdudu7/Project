using System;
using System.Net;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
    public class Query : IRequest<List<Activity>> {}

    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested(); //for if cancelled
            return await context.Activities.ToListAsync(cancellationToken);
        }
    }
}
