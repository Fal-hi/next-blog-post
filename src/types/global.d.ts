declare global {
  type ParamProps = {
    params: {
      q?: string;
      id?: string;
      tag?: string;
    };
  };
}

export { ParamProps };
