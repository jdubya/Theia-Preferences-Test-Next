import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const PreferencesTestNextCommand = {
    id: 'PreferencesTestNext.command',
    label: "Say Hello"
};

@injectable()
export class PreferencesTestNextCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(PreferencesTestNextCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class PreferencesTestNextMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: PreferencesTestNextCommand.id,
            label: PreferencesTestNextCommand.label
        });
    }
}
