import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LandingCardProps {
    title: string;
    description: string;
    }


export function LandingCard({ title, description}: LandingCardProps) {
  return (
    <div className="py-3 space-y-4">
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
        </Card>
    </div>
  );
} 