import anImg from "../../assets/youLogo.jpg";
import { usetoggleState } from "../../global/Jotai";

interface iCard {
  props: any;
}

const Cards: React.FC<iCard> = ({ props }) => {
  const [state, setState] = usetoggleState();
//   console.log(setState);
  return (
    <>
      <div key={props?.id}
        className={`${
          state ? "w-[350px]" : "w-[430px]"
        } m-1 min-h-[200px] border`}
      >
        <img
          src={props?.snippet.thumbnails.high.url}
          className="w-full h-[250px] border-b-2 rounded object-cover"
        />
        <div className="w-full flex items-center m-2">
          <img
            src={anImg}
            className="w-[50px] mr-2 h-[50px] object-cover border rounded-full"
          />
          <p>{props?.snippet.title}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
