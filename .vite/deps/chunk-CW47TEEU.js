import {
  getThemeProps,
  useEnhancedEffect_default,
  useThemeWithoutDefault_default
} from "./chunk-GBGCQTT2.js";
import {
  require_react
} from "./chunk-OAU5KCPK.js";
import {
  __toESM
} from "./chunk-GIZG7J7H.js";

// node_modules/.pnpm/@mui+material@5.14.12_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.26_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var React = __toESM(require_react());

// node_modules/.pnpm/@mui+material@5.14.12_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.26_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect_default2 = useEnhancedEffect_default;

// node_modules/.pnpm/@mui+material@5.14.12_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.26_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
function useMediaQueryOld(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const [match, setMatch] = React.useState(() => {
    if (noSsr && matchMedia) {
      return matchMedia(query).matches;
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    }
    return defaultMatches;
  });
  useEnhancedEffect_default2(() => {
    let active = true;
    if (!matchMedia) {
      return void 0;
    }
    const queryList = matchMedia(query);
    const updateMatch = () => {
      if (active) {
        setMatch(queryList.matches);
      }
    };
    updateMatch();
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia]);
  return match;
}
var maybeReactUseSyncExternalStore = React["useSyncExternalStore"];
function useMediaQueryNew(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const getDefaultSnapshot = React.useCallback(() => defaultMatches, [defaultMatches]);
  const getServerSnapshot = React.useMemo(() => {
    if (noSsr && matchMedia) {
      return () => matchMedia(query).matches;
    }
    if (ssrMatchMedia !== null) {
      const {
        matches
      } = ssrMatchMedia(query);
      return () => matches;
    }
    return getDefaultSnapshot;
  }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]);
  const [getSnapshot, subscribe] = React.useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {
      }];
    }
    const mediaQueryList = matchMedia(query);
    return [() => mediaQueryList.matches, (notify) => {
      mediaQueryList.addListener(notify);
      return () => {
        mediaQueryList.removeListener(notify);
      };
    }];
  }, [getDefaultSnapshot, matchMedia, query]);
  const match = maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return match;
}
function useMediaQuery(queryInput, options = {}) {
  const theme = useThemeWithoutDefault_default();
  const supportMatchMedia = typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
  const {
    defaultMatches = false,
    matchMedia = supportMatchMedia ? window.matchMedia : null,
    ssrMatchMedia = null,
    noSsr = false
  } = getThemeProps({
    name: "MuiUseMediaQuery",
    props: options,
    theme
  });
  if (true) {
    if (typeof queryInput === "function" && theme === null) {
      console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join("\n"));
    }
  }
  let query = typeof queryInput === "function" ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, "");
  const useMediaQueryImplementation = maybeReactUseSyncExternalStore !== void 0 ? useMediaQueryNew : useMediaQueryOld;
  const match = useMediaQueryImplementation(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr);
  if (true) {
    React.useDebugValue({
      query,
      match
    });
  }
  return match;
}

export {
  useEnhancedEffect_default2 as useEnhancedEffect_default,
  useMediaQuery
};
//# sourceMappingURL=chunk-CW47TEEU.js.map
