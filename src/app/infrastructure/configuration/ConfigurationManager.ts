import { ConfigurationProperty } from './ConfigurationProperty';
import { NodeEnvironments } from './typings';

export class ConfigurationManager {
    public static readonly NodeEnv = new ConfigurationProperty<NodeEnvironments>("NODE_ENV", true);
    public static readonly PublicUrl = new ConfigurationProperty<string>("PUBLIC_URL", true);
    public static readonly Api = new ConfigurationProperty<string>("API");
    public static readonly AppName = new ConfigurationProperty<string>("APP_NAME"); 
}