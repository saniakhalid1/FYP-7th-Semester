import Modal from "./modal/Modal";
import { LoginComponent } from "./login/LoginComponent";

interface Iprops {
  show: any;
  hide: any;
  state: any;
  setstate: any;
  logout?: Function;
  data?: any;
  refetch?: any;
  hiden?: any;
  nftDetail?: any;
  className?:string

}
const Popups = ({
  show,
  hide,
  state,
  setstate,
  className

 
}: Iprops) => {
  return (
    <div>
      <Modal show={show} hide={hide}  className={`${className} my-16`}>
        {(() => {
          switch (state) {
            case 1: {
              return <LoginComponent   setstate={ setstate}/>;
            }
            
            default:
              break;
          }
        })()}
      
      </Modal>
    </div>
  );
};

export default Popups;
