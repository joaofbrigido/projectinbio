"use client";

import Button from "@/app/components/ui/button";
import { useStripe } from "@/app/hooks/useStripe";
import { useParams } from "next/navigation";

export const PlansButtons = () => {
  const { createStripeCheckout } = useStripe();
  const { profileId } = useParams();

  return (
    <div className="flex gap-4">
      <Button
        onClick={() =>
          createStripeCheckout({
            metadata: { profileId },
            isSubscription: true,
          })
        }
      >
        R$ 9,90 / mês
      </Button>
      <Button
        onClick={() =>
          createStripeCheckout({
            metadata: { profileId },
            isSubscription: false,
          })
        }
      >
        R$ 99,90 Vitalício
      </Button>
    </div>
  );
};
