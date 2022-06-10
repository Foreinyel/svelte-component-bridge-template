import React, { useEffect, useRef, useLayoutEffect } from "react";
const useCustomLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
const load = (function () {
  return System.import("{{ resourceUrl }}");
})();

export interface BridgeProps {}

export const Bridge = (props: any) => {
  const dom = useRef<HTMLDivElement | null>(null);

  useCustomLayoutEffect(() => {
    load.then((mod: any) => {
      mod.mount(dom.current, props);
    });
  }, []);

  return <div ref={dom} />;
};

export default Bridge;
