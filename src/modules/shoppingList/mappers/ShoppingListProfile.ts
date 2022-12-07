import {
  createMap,
  forMember,
  mapFrom,
  Mapper,
  MappingProfile,
} from "@automapper/core";
import { injectable } from "inversify";
import { AutomapperProfile } from "../../../shared/automapper/AutomapperProfile";
import { ShoppingList } from "../models/ShoppingList";
import { ShoppingListDto } from "../dtos/ShoppingListDto";
import { FoodDto } from "../../foods/dtos/FoodDto";
import { Food } from "../../foods/models/Food";

@injectable()
export class ShoppingListProfile implements AutomapperProfile {
  public get profile(): MappingProfile {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        ShoppingList,
        ShoppingListDto,
        forMember(
          (destination) => destination.id,
          mapFrom((source) => source.id)
        ),
        forMember(
          (destination) => destination.foods,
          mapFrom((source) => mapper.mapArray(source.foods, FoodDto, FoodDto))
        ),
        forMember(
          (destination) => destination.createdAt,
          mapFrom((source) => source.createdAt.toISOString())
        )
      );

      createMap(
        mapper,
        ShoppingListDto,
        ShoppingList,
        forMember(
          (destination) => destination.id,
          mapFrom((source) => source.id)
        ),
        forMember(
          (destination) => destination.foods,
          mapFrom((source) => mapper.mapArray(source.foods, FoodDto, Food))
        ),
        forMember(
          (destination) => destination.createdAt,
          mapFrom((source) => new Date(source.createdAt))
        )
      );
    };
  }
}
