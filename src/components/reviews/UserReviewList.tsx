import { Star } from 'lucide-react';

export interface UserReview {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  usedPurrify: boolean;
  photoUrl?: string;
}

interface UserReviewListProps {
  reviews: UserReview[];
}

export function UserReviewList({ reviews }: UserReviewListProps) {
  if (reviews.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6 my-12">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">What Cat Parents Are Saying</h3>
        <div className="text-sm text-muted-foreground">
          {reviews.length} review{reviews.length !== 1 ? 's' : ''}
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map(review => (
          <div key={review.id} className="bg-white border border-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              {review.photoUrl ? (
                <img
                  src={review.photoUrl}
                  className="w-12 h-12 rounded-full object-cover"
                  alt={review.name}
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <div className="font-bold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.date}</div>
                </div>

                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className={
                          star <= review.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                        }
                        size={16}
                      />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-medium">
                      ✓ Verified Purchase
                    </span>
                  )}
                  {review.usedPurrify && (
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded font-medium">
                      🧪 Used with Purrify
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
