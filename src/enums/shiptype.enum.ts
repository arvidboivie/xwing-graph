import { registerEnumType } from "type-graphql";

export enum ShipType {
    A_SF_01_B_WING = "A/SF-01 B-wing",
    ARC_170_STARFIGHTER = "ARC-170 Starfighter",
    ATTACK_SHUTTLE = "Attack Shuttle",
    AUZITUCK_GUNSHIP = "Auzituck Gunship",
    BTL_A4_Y_WING = "BTL-A4 Y-wing",
    BTL_S8_K_WING = "BTL-S8 K-wing",
    E_WING = "E-wing",
    HWK_290_LIGHT_FREIGHTER = "HWK-290 Light Freighter",
    MODIFIED_YT_1300_LIGHT_FREIGHTER = "Modified YT-1300 Light Freighter",
    RZ_1_A_WING = "RZ-1 A-wing",
    SHEATHIPEDE_CLASS_SHUTTLE = "Sheathipede-class Shuttle",
    T_65_X_WING = "T-65 X-wing",
    UT_60D_U_WING = "UT-60D U-wing",
    VCX_100_LIGHT_FREIGHTER = "VCX-100 Light Freighter",
    YT_2400_LIGHT_FREIGHTER = "YT-2400 Light Freighter",
    Z_95_AF4_HEADHUNTER = "Z-95-AF4 Headhunter",
    AGGRESSOR_ASSAULT_FIGHTER = "Aggressor Assault Fighter",
    CUSTOMIZED_YT_1300_LIGHT_FREIGHTER = "Customized YT-1300 Light Freighter",
    ESCAPE_CRAFT = "Escape Craft",
    FANG_FIGHTER = "Fang Fighter",
    FIRESPRAY_CLASS_PATROL_CRAFT = "Firespray-class Patrol Craft",
    G_1A_STARFIGHTER = "G-1A Starfighter",
    JUMPMASTER_5000 = "JumpMaster 5000",
    KIHRAXZ_FIGHTER = "Kihraxz Fighter",
    LANCER_CLASS_PURSUIT_CRAFT = "Lancer-class Pursuit Craft",
    M12_L_KIMOGILA_FIGHTER = "M12-L Kimogila Fighter",
    M3_A_INTERCEPTOR = "M3-A Interceptor",
    MODIFIED_TIE_LN_FIGHTER = "Modified TIE/ln Fighter",
    QUADRIJET_TRANSFER_SPACETUG = "Quadrijet Transfer Spacetug",
    SCURRG_H_6_BOMBER = "Scurrg H-6 Bomber",
    STARVIPER_CLASS_ATTACK_PLATFORM = "StarViper-class Attack Platform",
    YV_666_LIGHT_FREIGHTER = "YV-666 Light Freighter",
    ALPHA_CLASS_STAR_WING = "Alpha-class Star Wing",
    LAMBDA_CLASS_T_4A_SHUTTLE = "Lambda-class T-4a Shuttle",
    TIE_ADVANCED_V1 = "TIE Advanced v1",
    TIE_ADVANCED_X1 = "TIE Advanced x1",
    TIE_INTERCEPTOR = "TIE Interceptor",
    TIE_REAPER = "TIE Reaper",
    TIE_D_DEFENDER = "TIE/D Defender",
    TIE_AG_AGGRESSOR = "TIE/ag Aggressor",
    TIE_CA_PUNISHER = "TIE/ca Punisher",
    TIE_LN_FIGHTER = "TIE/ln Fighter",
    TIE_PH_PHANTOM = "TIE/ph Phantom",
    TIE_SA_BOMBER = "TIE/sa Bomber",
    TIE_SK_STRIKER = "TIE/sk Striker",
    VT_49_DECIMATOR = "VT-49 Decimator",
    MG_100_STARFORTRESS_SF_17 = "MG-100 StarFortress SF-17",
    RZ_2_A_WING = "RZ-2 A-wing",
    T_70_X_WING = "T-70 X-wing",
    TIE_SILENCER = "TIE Silencer",
    TIE_FO_FIGHTER = "TIE/fo Fighter",
    UPSILON_CLASS_SHUTTLE = "Upsilon-class Shuttle"
}

registerEnumType(ShipType, {
    name: "ShipType",
    description: "Every ship type in the game",
});