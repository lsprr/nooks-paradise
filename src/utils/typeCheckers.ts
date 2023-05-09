import { Construction } from 'animal-crossing/lib/types/Construction';
import { Creature } from 'animal-crossing/lib/types/Creature';
import { Item } from 'animal-crossing/lib/types/Item';
import { Reaction } from 'animal-crossing/lib/types/Reaction';
import { Recipe } from 'animal-crossing/lib/types/Recipe';
import { Villager } from 'animal-crossing/lib/types/Villager';
import { Npc } from 'animal-crossing/lib/types/NPC';

export const isConstruction = (item: any): item is Construction => {
    return 'sourceSheet' in item && item.sourceSheet === 'Construction'
};

export const isCreature = (item: any): item is Creature => {
    return 'sourceSheet' in item && item.sourceSheet === 'Fish' || 'Insects' || 'Sea Creatures'
};

export const isItem = (item: any): item is Item => {
    return 'sourceSheet' in item && item.sourceSheet === 'Accessories' || 'Artwork' || 'Bags' || 'Bottoms' || 'Ceiling Decor' || 'Clothing Other' || 'Dress-Up'
        || 'Fencing' || 'Floors' || 'Fossils' || 'Gyroids' || 'Headwear' || 'Housewares' || 'Message Cards' || 'Miscellaneous' || 'Music' || 'Other' || 'Photos' || 'Posters'
        || 'Rugs' || 'Shoes' || 'Socks' || 'Tools/Goods' || 'Tops' || 'Umbrellas' || 'Wall-mounted' || 'Wallpaper'
};

export const isReaction = (item: any): item is Reaction => {
    return 'sourceSheet' in item && item.sourceSheet === 'Reactions'
};

export const isRecipe = (item: any): item is Recipe => {
    return 'sourceSheet' in item && item.sourceSheet === 'Recipes'
};

export const isVillager = (item: any): item is Villager => {
    return 'sourceSheet' in item && item.sourceSheet === 'Villagers'
};

export const isNpc = (item: any): item is Npc => {
    return 'sourceSheet' in item && item.sourceSheet === 'Npc'
};