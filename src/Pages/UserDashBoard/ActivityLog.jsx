
import { Avatar,Card } from "keep-react";


const ActivityLog = () => {
    return (
        <div>
            <Card className="max-w-xs p-6 md:max-w-lg">
        <Card.Description>
          Class: Zumba Dance
        </Card.Description>
        <Card.Container className="flex items-center">
          <Avatar size="lg" shape="circle" img="https://randomuser.me/api/portraits/men/11.jpg" />
          <Card.Container className="ml-3">
            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">James</Card.Title>
            <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">Fitness Trainer</Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>
        
        </div>
    );
};

export default ActivityLog;