package chicago.foodnetworkbackend.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class FoodTypeDto {
    private Long id;
    private String name;
}
