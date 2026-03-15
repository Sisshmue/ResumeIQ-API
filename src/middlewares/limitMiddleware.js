import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
    windowMs: 15 * 60 *1000,
    max : 5,
    message : 'The system allows only 5 requests per 15 min at the moment, please try again later after 15 min.'
})