import _ from 'lodash';
import { DefaultRouteProp, DefaultNavigationProp } from 'expo-navigation-core/build/hooks/use-routing/types';
export default function useRouting<RProp extends DefaultRouteProp = DefaultRouteProp, NProp extends DefaultNavigationProp = DefaultNavigationProp>(): {
    getParam: <Param>(param: _.Many<string | number | symbol>, fallback?: unknown) => Param | undefined;
    navigate: <To extends {
        routeName: string;
        params?: object | undefined;
        web?: {
            path?: string | undefined;
            as?: string | undefined;
        } | undefined;
    } = {
        routeName: string;
        params?: object | undefined;
        web?: {
            path?: string | undefined;
            as?: string | undefined;
        } | undefined;
    }>({ routeName, web, params, }: To) => void;
    push: <To extends {
        routeName: string;
        params?: object | undefined;
        web?: {
            path?: string | undefined;
            as?: string | undefined;
        } | undefined;
    } = {
        routeName: string;
        params?: object | undefined;
        web?: {
            path?: string | undefined;
            as?: string | undefined;
        } | undefined;
    }>({ routeName, web, params, }: To) => void;
    goBack: () => void;
    popToTop: () => void;
    prefetch: (url: string) => Promise<void>;
    replace: <To_1 extends {
        routeName: string;
        params?: object | undefined;
        web?: {
            path?: string | undefined;
            as?: string | undefined;
        } | undefined;
    } = {
        routeName: string;
        params?: object | undefined;
        web?: {
            path?: string | undefined;
            as?: string | undefined;
        } | undefined;
    }>({ routeName, web, params, }: To_1) => void;
    setParams: <R = {}>(a: R) => void;
};
