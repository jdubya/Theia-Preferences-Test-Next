/**
 * Generated using theia-extension-generator
 */
import { PreferencesTestNextCommandContribution, PreferencesTestNextMenuContribution } from './preferences-test-next-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(PreferencesTestNextCommandContribution);
    bind(MenuContribution).to(PreferencesTestNextMenuContribution);
});
