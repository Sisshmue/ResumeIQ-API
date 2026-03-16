import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
    windowMs: 15 * 60 *1000,
    max : 15,
    message : 'The system allows only 15 requests per 15 min at the moment, please try again later after 15 min.'
})
