'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

interface ReviewFormData {
  name: string;
  email: string;
  rating: number;
  productUsed: string;
  usedPurrify: boolean;
  reviewText: string;
}

interface UserReviewFormProps {
  productId: string;
  productName: string;
}

export function UserReviewForm({ productId, productName }: UserReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data: ReviewFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      rating: rating,
      productUsed: productId,
      usedPurrify: formData.get('usedPurrify') === 'on',
      reviewText: formData.get('reviewText') as string,
    };

    // TODO: Send to backend (Supabase, Airtable, Google Sheets API, etc.)
    // For now, just simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-border rounded-2xl p-8">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">✓</div>
          <div className="text-emerald-600 font-bold text-lg mb-2">Thank you!</div>
          <p className="text-muted-foreground">
            Your review helps other cat parents make better decisions. We&apos;ll review it and
            publish it within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-6">Share Your Experience</h3>
      <p className="text-muted-foreground mb-6">
        Help other cat parents by sharing your experience with {productName}
      </p>

      <form onSubmit={handleSubmit}>
        {/* Rating stars */}
        <div className="mb-6">
          <label className="block font-bold mb-2">Your Rating *</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="text-3xl transition-all hover:scale-110"
              >
                <Star
                  className={
                    (hoveredRating || rating) >= star
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-gray-300'
                  }
                />
              </button>
            ))}
          </div>
          {rating === 0 && (
            <p className="text-sm text-muted-foreground mt-1">Click to rate</p>
          )}
        </div>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-border rounded-lg p-3"
            placeholder="John D."
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email * <span className="font-normal text-sm text-muted-foreground">(not published)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-border rounded-lg p-3"
            placeholder="john@example.com"
          />
        </div>

        {/* Review text */}
        <div className="mb-4">
          <label htmlFor="reviewText" className="block font-bold mb-2">
            Your Review *
          </label>
          <textarea
            id="reviewText"
            name="reviewText"
            required
            rows={5}
            className="w-full border border-border rounded-lg p-3"
            placeholder="What did you think? How long did you use it? Any tips for other cat parents?"
          />
        </div>

        {/* Purrify checkbox */}
        <div className="mb-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="usedPurrify"
              className="mt-1 w-5 h-5 accent-emerald-600"
            />
            <span className="flex-1">
              <span className="font-medium">I also used Purrify with this litter</span>
              <span className="block text-sm text-muted-foreground mt-1">
                Help others see how Purrify enhances different litters
              </span>
            </span>
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={rating === 0 || loading}
          className="w-full bg-foreground text-background py-3 rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Submit Review'}
        </button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          By submitting, you agree that your review may be published on ReviewCatLitter.com
        </p>
      </form>
    </div>
  );
}
