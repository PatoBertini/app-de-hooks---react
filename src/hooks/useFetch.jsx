import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {

    setState({
        ...state,
        isLoading:true,
    })

    const respPromesa = await fetch(url);
    const getData = await respPromesa.json();
    setState({
        data: getData,
        isLoading:false,
        hasError: null
    })
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,

  };
};

export default useFetch;
