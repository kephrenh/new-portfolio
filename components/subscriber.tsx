import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Subscriber = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Subscription Added</CardTitle>
        <CardDescription>Please check your email</CardDescription>
      </CardHeader>
      <CardContent>
        <p id="subsc-message">Wow!! Mohamed Amoussa subscribed.</p>
      </CardContent>
      <CardFooter>
        <p>Last Subscription at: {new Date().toTimeString()}</p>
      </CardFooter>
    </Card>
  );
};
export default Subscriber;
