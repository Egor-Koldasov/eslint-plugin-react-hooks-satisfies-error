import { ChangeEvent, useCallback, useState } from "react";

type OnClick = (event: ChangeEvent<HTMLElement>) => boolean;
export const useOnClick = () => {
  const [clicked, setClicked] = useState(false);
  // Error: React Hook useCallback received a function whose dependencies are unknown. Pass an inline function instead. eslintreact-hooks/exhaustive-deps
  const onClick = useCallback(
    ((event) => {
      console.log("event", event.currentTarget);
      setClicked(true);
      return clicked;
    }) satisfies OnClick,
    // Expected to see a warning here: React Hook useCallback has a missing dependency: 'clicked'. Either include it or remove the dependency array.eslintreact-hooks/exhaustive-deps
    []
  );
  return onClick;
};
