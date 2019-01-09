import { Theme } from "@material-ui/core";
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import zIndex from '@material-ui/core/styles/zIndex';

export const ProgressStyles = (theme: Theme): Record<string, CSSProperties> => ({
    progress: {
        zIndex: zIndex.appBar
    }
});