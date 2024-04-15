package chicago.foodnetworkbackend.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ReceiverDto {
    private Long receiverId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String address;
    private Double latitude;
    private Double longitude;
    private String miscellaneous;
    private String orgName;
    private String receiverType;
    private String foodType;
    private boolean status;
}
