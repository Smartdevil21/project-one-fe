import * as actionDispatchers from "@/store/action-creators/combined.dispatchers";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

function useDispatchers() {
  const dispatch = useDispatch();
  return bindActionCreators(actionDispatchers, dispatch);
}

export default useDispatchers;
