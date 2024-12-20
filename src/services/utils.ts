import { instance } from "@/libs/axios";

type Obj = { [key: string]: any };

const querySearch = (params: Obj = {}): string => {
  return Object.keys(params)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
};

function _get<R>(route: string, params?: Obj, config?: Obj): Promise<R> {
  return instance.get(
    params && Object.keys(params).length > 0
      ? `${route}?${querySearch(params)}`
      : route,
    config
  );
}
export { _get };
