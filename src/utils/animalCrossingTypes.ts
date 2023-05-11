import { Achievement } from 'animal-crossing/lib/types/Achievement';
import { Construction } from 'animal-crossing/lib/types/Construction';
import { Creature } from 'animal-crossing/lib/types/Creature';
import { Item } from 'animal-crossing/lib/types/Item';
import { Reaction } from 'animal-crossing/lib/types/Reaction';
import { Recipe } from 'animal-crossing/lib/types/Recipe';
import { Villager } from 'animal-crossing/lib/types/Villager';
import { Npc } from 'animal-crossing/lib/types/NPC';
import { SourceSheet } from 'animal-crossing/lib/types/NPC';


type AllItemTypes = Achievement | Construction | Creature | Item | Reaction | Recipe | Villager | Npc;

export const isAchievement = (item: AllItemTypes): item is Achievement => {
    return 'sourceSheet' in item && item.sourceSheet === 'Achievements'
};

export const isConstruction = (item: AllItemTypes): item is Construction => {
    return 'sourceSheet' in item && item.sourceSheet === 'Construction'
};

export const isCreature = (item: AllItemTypes): item is Creature => {
    return 'sourceSheet' in item && (
        item.sourceSheet === 'Fish' ||
        item.sourceSheet === 'Insects' ||
        item.sourceSheet === 'Sea Creatures')
};

export const isItem = (item: AllItemTypes): item is Item => {
    return 'sourceSheet' in item && (
        item.sourceSheet === 'Accessories' ||
        item.sourceSheet === 'Artwork' ||
        item.sourceSheet === 'Bags' ||
        item.sourceSheet === 'Bottoms' ||
        item.sourceSheet === 'Ceiling Decor' ||
        item.sourceSheet === 'Clothing Other' ||
        item.sourceSheet === 'Dress-Up' ||
        item.sourceSheet === 'Fencing' ||
        item.sourceSheet === 'Floors' ||
        item.sourceSheet === 'Fossils' ||
        item.sourceSheet === 'Gyroids' ||
        item.sourceSheet === 'Headwear' ||
        item.sourceSheet === 'Housewares' ||
        item.sourceSheet === 'Message Cards' ||
        item.sourceSheet === 'Miscellaneous' ||
        item.sourceSheet === 'Music' ||
        item.sourceSheet === 'Other' ||
        item.sourceSheet === 'Photos' ||
        item.sourceSheet === 'Posters' ||
        item.sourceSheet === 'Rugs' ||
        item.sourceSheet === 'Shoes' ||
        item.sourceSheet === 'Socks' ||
        item.sourceSheet === 'Tools/Goods' ||
        item.sourceSheet === 'Tops' ||
        item.sourceSheet === 'Umbrellas' ||
        item.sourceSheet === 'Wall-mounted' ||
        item.sourceSheet === 'Wallpaper'
    );
};

export const isReaction = (item: AllItemTypes): item is Reaction => {
    return 'sourceSheet' in item && item.sourceSheet === 'Reactions'
};

export const isRecipe = (item: AllItemTypes): item is Recipe => {
    return 'sourceSheet' in item && item.sourceSheet === 'Recipes'
};

export const isVillager = (item: AllItemTypes): item is Villager => {
    return 'sourceSheet' in item && item.sourceSheet === 'Villagers'
};

export const isNpc = (item: AllItemTypes): item is Npc => {
    return 'sourceSheet' in item && item.sourceSheet === SourceSheet.SpecialNPCS;
};
