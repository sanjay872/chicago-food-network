package chicago.foodnetworkbackend.dto;

import jakarta.persistence.Entity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class DonorDto {
    private Long donorId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String latitude;
    private String longitude;
}
