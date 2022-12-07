import {
  createMap,
  forMember,
  mapFrom,
  Mapper,
  MappingProfile,
} from "@automapper/core";
import { injectable } from "inversify";
import { Food } from "../models/Food";
import { FoodDto } from "../dtos/FoodDto";
import { AutomapperProfile } from "../../../shared/automapper/AutomapperProfile";

@injectable()
export class FoodsProfile implements AutomapperProfile {
  public get profile(): MappingProfile {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        Food,
        FoodDto,
        forMember(
          (destination) => destination.id,
          mapFrom((source) => source.id)
        ),
        forMember(
          (destination) => destination.name,
          mapFrom((source) => source.name)
        ),
        forMember(
          (destination) => destination.image,
          mapFrom((source) => source.image)
        )
      );

      createMap(
        mapper,
        FoodDto,
        Food,
        forMember(
          (destination) => destination.id,
          mapFrom((source) => source.id)
        ),
        forMember(
          (destination) => destination.name,
          mapFrom((source) => source.name)
        ),
        forMember(
          (destination) => destination.image,
          mapFrom((source) => source.image)
        )
      );
    };
  }
}
