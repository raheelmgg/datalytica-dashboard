import { SettingsIcon } from "lucide-react";
import aiIcon from "@/assets/ai-icon.svg";
type Props = {
  title: string;
};

function CardHeader({ title }: Props) {
  return (
    <div className="cardHeader flex justify-between items-center">
      <h3 className="text-lg font-semibold leading-6 text-white ">{title}</h3>

      <div className="flex flex-row gap-2 items-center">
        <div>
          <img src={aiIcon} alt="AI icon" className="h-4 w-4" />
        </div>
        <div>
          <SettingsIcon className="text-white h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
