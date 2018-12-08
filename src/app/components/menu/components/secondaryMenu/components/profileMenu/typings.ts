// tslint:disable:interface-name

export interface ProfileMenuStateProps {
    anchorElement: any,
    isProfileMenuOpen: boolean
}

export interface ProfileMenuDispatchProps {
    closeProfileMenu(): void
}


export type ProfileMenuProps = ProfileMenuStateProps & ProfileMenuDispatchProps;