using System;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.validators;

public class BaseActivityValidator <T, TDto> : AbstractValidator<T> 
    where TDto : BaseActivityDto
{
    public BaseActivityValidator(Func<T,TDto> selector)
    {
        RuleFor(x => selector(x).Title)
            .NotEmpty().WithMessage("title is required")
            .MaximumLength(100).WithMessage("Title must not excedd 100 characters");
        RuleFor(x => selector(x).Description).NotEmpty().WithMessage("description is required");
        RuleFor(x => selector(x).Date)
            .GreaterThan(DateTime.UtcNow).WithMessage("date must in future");
        RuleFor(x=>selector(x).Category)
            .NotEmpty().WithMessage("category is required");
        RuleFor(x=>selector(x).City)
            .NotEmpty().WithMessage("city is required");
        RuleFor(x=>selector(x).Venue)
            .NotEmpty().WithMessage("venue is required");
        RuleFor(x=>selector(x).Latitude)
            .InclusiveBetween(-90,90).WithMessage("Latitude between -90,90");
        RuleFor(x=>selector(x).Longitude)
            .InclusiveBetween(-90,90).WithMessage("Longitude between -90,90");
    }
}
